from rest_framework import serializers
from .models import Appointment


class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = [
            'id', 'full_name', 'phone', 'email', 'test_name',
            'preferred_date', 'preferred_time', 'visit_type',
            'status', 'created_at',
        ]
        read_only_fields = ['status', 'created_at']


class BookableTestSerializer(serializers.Serializer):
    """Lightweight serializer for the booking form's test dropdown."""
    value = serializers.CharField()
    label = serializers.CharField()
