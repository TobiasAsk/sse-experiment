FROM python:3.8.1-slim

COPY requirements.txt /sse-backend/
WORKDIR /sse-backend
RUN pip install -r requirements.txt
COPY . /sse-backend
ENTRYPOINT ["flask", "run", "--host=0.0.0.0", "--with-threads"]
