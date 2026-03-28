from rest_framework import serializers
from .models import TestCategory, LabTest


class TestCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = TestCategory
        fields = ['id', 'name', 'slug']


class LabTestSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)

    class Meta:
        model = LabTest
        fields = [
            'id', 'title', 'category', 'category_name', 'description',
            'price', 'preparation', 'sample_type', 'turnaround', 'icon_name',
        ]
