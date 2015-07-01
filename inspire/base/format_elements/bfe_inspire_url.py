# -*- coding: utf-8 -*-
##
## This file is part of INSPIRE.
## Copyright (C) 2015 CERN.
##
## INSPIRE is free software; you can redistribute it and/or
## modify it under the terms of the GNU General Public License as
## published by the Free Software Foundation; either version 2 of the
## License, or (at your option) any later version.
##
## INSPIRE is distributed in the hope that it will be useful, but
## WITHOUT ANY WARRANTY; without even the implied warranty of
## MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
## General Public License for more details.
##
## You should have received a copy of the GNU General Public License
## along with INSPIRE; if not, write to the Free Software Foundation, Inc.,
## 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.
#
"""BibFormat element - Prints full-text URLs
"""
__revision__ = "$Id$"


def format_element(bfo, style, separator='; '):
    """Default format for formatting full-text URLs.

    @param separator: the separator between urls.
    @param style: CSS class of the link
    """
    urls_u = bfo.fields("8564_u")
    if style != "":
        style = 'class="'+style+'"'

    urls = ['<a ' + style +
            'href="' + url + '">' + url + '</a>'
            for url in urls_u]
    return separator.join(urls)


def escape_values(bfo):
    """
    Check if output of this element should be escaped.

    Called by BibFormat in order to check if output of this element
    should be escaped.
    """
    return 0