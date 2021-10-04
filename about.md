---
layout: default
title: About
permalink: /about/
style: css/about.css
description: I'm Andrew Li, high school senior from Omaha, Nebraska. Currently a student and number theory TA at the University of Nebraska-Omaha.
---

![Portrait](/assets/images/portrait.jpg)

I'm Andrew Li, a **student** studying mathematics and computer science at the **Massachusetts Institute of Technology** in Cambridge, MA. I was previously a **number theory TA**, **mathematics student researcher**, and **cybersecurity intern** at the University of Nebraska-Omaha.

I ❤️ building web and mobile apps for fun. On the arts side, I'm a nationally-recognized jazz musician on the alto sax and love to design posters, cards, and magazine spreads.

<div class="profiles">
{% for profile in site.profiles %}
  <a href="{{ profile.link }}">
    {% svg "{{ profile.logo }}" %}
  </a>
{% endfor %}
</div>
