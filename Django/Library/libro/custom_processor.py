import time


class MiddlewareProcessingTime:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        started_time = time.time()

        response = self.get_response(request)

        end_time = time.time()

        total_time = end_time - started_time

        response["X-Tiempo-De-Procesamiento"] = str(total_time)
        print(total_time)

        return response