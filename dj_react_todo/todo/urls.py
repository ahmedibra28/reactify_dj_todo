from rest_framework import routers
from todo.views import ToDoViewSet

router = routers.DefaultRouter()
router.register('api/todos', ToDoViewSet, 'todos')
urlpatterns = router.urls
