import flask as fl
from http import HTTPStatus
from app.redis_connect import get_redis

analysis_bp = fl.Blueprint('analyses', __name__, url_prefix='/api/analyses')


@analysis_bp.route('', methods=['GET', 'POST'])
def analyses():
    if fl.request.method == 'POST':
        print(f'Received {fl.request.get_json()}', flush=True)

    rdis = get_redis()
    rdis.publish('chat', 'Hello, redis world!')

    return {
        'status': 'ok'
    }, HTTPStatus.CREATED


@analysis_bp.route('/notification-stream')
def notification_stream():
    return fl.Response(fl.stream_with_context(event_stream()), mimetype="text/event-stream")


def event_stream():
    rdis = get_redis()
    pubsub = rdis.pubsub()
    pubsub.subscribe('chat')

    for message in pubsub.listen():
        if message['type'] == 'message':
            message_data = message['data'].decode()
            print(message_data, flush=True)
            yield f'data: {message_data}\n\n'
