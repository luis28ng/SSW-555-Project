from django.urls import path

from .views import index

urlpatterns = [
    path('', index),
    path('login', index, name='login'),
    # path('nav', index)
    path('salesrep', index),
    path('userreq',index),
    path('userprog', index),
    path('oper',index),
    path('userHome', index),
    path('opManager', index),
    path('constructionManager', index),
    path('orderTable', index),
    path('coCheck', index),
    path('payments', index),
    path('siteSurveyor', index),
    path('scheduling', index),
    path('aboutUs', index)
]