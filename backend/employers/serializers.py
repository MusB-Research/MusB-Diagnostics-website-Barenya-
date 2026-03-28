from rest_framework import serializers
from .models import CorporatePlan, PlanFeature, ComparisonRow


class PlanFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlanFeature
        fields = ['id', 'text']


class CorporatePlanSerializer(serializers.ModelSerializer):
    features = PlanFeatureSerializer(many=True, read_only=True)

    class Meta:
        model = CorporatePlan
        fields = [
            'id', 'name', 'price_display', 'price_suffix',
            'description', 'is_featured', 'tag_label', 'icon_name', 'features',
        ]


class ComparisonRowSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComparisonRow
        fields = [
            'id', 'feature_name', 'annual_coverage',
            'match_program', 'free_membership', 'medical_advice',
        ]
