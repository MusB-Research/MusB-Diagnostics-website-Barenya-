from django.contrib import admin
from .models import StudyService, BiorepositoryInfo, Collaboration, QuoteRequest, ResearchNewsletter

admin.site.register(StudyService)
admin.site.register(BiorepositoryInfo)
admin.site.register(Collaboration)
admin.site.register(QuoteRequest)
admin.site.register(ResearchNewsletter)
