from rest_framework import serializers
from .models import StudyService, BiorepositoryInfo, Collaboration, QuoteRequest, ResearchNewsletter


class StudyServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudyService
        fields = ['id', 'title', 'description', 'icon_name']


class BiorepositoryInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = BiorepositoryInfo
        fields = ['id', 'stat_label', 'stat_value', 'description']


class CollaborationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collaboration
        fields = ['id', 'title', 'description', 'icon_name']


class QuoteRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuoteRequest
        fields = [
            'id', 'name', 'institution', 'email',
            'study_title', 'description', 'created_at',
        ]
        read_only_fields = ['created_at']


class ResearchNewsletterSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResearchNewsletter
        fields = ['id', 'email', 'subscribed_at']
        read_only_fields = ['subscribed_at']
