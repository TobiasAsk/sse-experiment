from flask import Flask, g
from app.analysis import analysis_bp
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    CORS(app, supports_credentials=True)
    app.register_blueprint(analysis_bp)
    return app
