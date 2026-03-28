from rest_framework import serializers
from .models import HeroContent, Service, Testimonial, PopularPanel, NewsletterSubscriber


class HeroContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroContent
        fields = ['id', 'badge_text', 'title', 'subtitle']


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'title', 'description', 'icon_name', 'link', 'features']


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ['id', 'author_name', 'content', 'rating', 'is_featured']


class PopularPanelSerializer(serializers.ModelSerializer):
    class Meta:
        model = PopularPanel
        fields = ['id', 'name', 'icon_name', 'price', 'link']


class NewsletterSubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsletterSubscriber
        fields = ['id', 'email', 'subscribed_at']
        read_only_fields = ['subscribed_at']
