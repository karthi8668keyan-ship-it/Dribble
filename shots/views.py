from django.shortcuts import render


def index(request):
    categories = [
        {'name': 'UI/UX Design',      'icon': '🎨', 'count': '2.4M', 'bg': '#fdf2f8'},
        {'name': 'Branding',          'icon': '✦',  'count': '1.1M', 'bg': '#f0f9ff'},
        {'name': 'Illustration',      'icon': '🖌️', 'count': '890K', 'bg': '#f0fdf4'},
        {'name': 'Typography',        'icon': 'Aa',  'count': '540K', 'bg': '#fffbeb'},
        {'name': 'Motion & Animation','icon': '▶',   'count': '320K', 'bg': '#fef9ec'},
        {'name': 'Mobile Design',     'icon': '📱',  'count': '760K', 'bg': '#f5f3ff'},
        {'name': 'Web Design',        'icon': '🌐',  'count': '1.8M', 'bg': '#ecfdf5'},
        {'name': 'Photography',       'icon': '📷',  'count': '430K', 'bg': '#fff1f2'},
    ]
    return render(request, 'shots/index.html', {'categories': categories})
