{%%

data = include('bases/clips.yml')[current_page]
peertube = parse_peertube_url(data['url'], data['maxres'] if 'maxres' in data else 1080)

%%}
----
nav: clips
title: {% data['title'] %}
----

### {% data['title'] %}

<div class="iframe">
    <iframe src="{% peertube['iframe'] %}?warningTitle=0&peertubeLink=0&title=0" allow="fullscreen"></iframe>
</div>


### Téléchargement

- [HD]({% peertube['maxres'] %})
- [720p]({% peertube['720p'] %})
- [360p]({% peertube['360p'] %})

{%%

notes = include('content/clips/%s.md' % current_page)

if 'ERROR' not in notes:

    print('### Notes d\'intentions')
    print(notes)


%%}
