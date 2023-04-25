from django.urls import path
from .views import index
from django.urls import re_path

urlpatterns = [
    path('', index),
    path('login', index, name='login'),
    path('salesrep', index),
    path('userreq',index),
    path('userprog', index),
    # path('oper',index),
    # path('userHome', index),
    path('opManager', index),
    path('constructionManager', index),
    # path('orderTable', index),
    # path('coCheck', index),
    path('payments', index),
    path('siteSurveyor', index),
    # path('scheduling', index),
    path('aboutUs', index),
    path('payment',index)
]

urlpatterns += [
    re_path(r'^(?!admin\/|api\/|api-login\/|logout\/|users\/constructionManagers\/|users\/siteSurveyors\/|users\/salesreps\/|api-auth\/|login|salesrep|userreq|userprog|opManager|constructionManager|payments|siteSurveyor|aboutUs|payment).*$', index, name='catch-all'),
]