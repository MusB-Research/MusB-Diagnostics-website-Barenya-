from django.contrib import admin
from .models import HeroContent, Service, Testimonial, PopularPanel, NewsletterSubscriber

admin.site.register(HeroContent)
admin.site.register(Service)
admin.site.register(Testimonial)
admin.site.register(PopularPanel)
admin.site.register(NewsletterSubscriber)
