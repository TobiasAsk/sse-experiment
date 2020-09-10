import redis
import flask as fl


def get_redis() -> redis.Redis:
    if not 'redis_instance' in fl.g:
        fl.g.redis_instance = redis.Redis('redis', port=6379, db=0)
    return fl.g.redis_instance
