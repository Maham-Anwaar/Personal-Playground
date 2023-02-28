from django.contrib import admin
from .models import Reminder, ReminderChoices

@admin.register(Reminder)
class ReminderAdmin(admin.ModelAdmin):
    list_display = ('title', 'type', 'due_date', 'is_send_alert')
    list_filter = ('type', 'is_send_alert')
    search_fields = ('title', 'details')
    date_hierarchy = 'due_date'

    fieldsets = (
        (None, {'fields': ('title', 'type', 'user')}),
        ('Date Information', {'fields': ('due_date',)}),
        ('Additional Information', {'fields': ('details', 'is_send_alert')}),
    )
    
    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['type'].choices = ReminderChoices.choices
        return form

