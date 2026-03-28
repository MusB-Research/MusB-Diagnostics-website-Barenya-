from rest_framework import serializers
from .models import Offer


class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = [
            'id', 'title', 'offer_type', 'category', 'includes',
            'original_price', 'discounted_price', 'time_left',
        ]
