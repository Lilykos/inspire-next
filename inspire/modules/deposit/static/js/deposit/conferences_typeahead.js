/*
 * This file is part of INSPIRE.
 * Copyright (C) 2014 CERN.
 *
 * INSPIRE is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * INSPIRE is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with INSPIRE. If not, see <http://www.gnu.org/licenses/>.
 *
 * In applying this licence, CERN does not waive the privileges and immunities
 * granted to it by virtue of its status as an Intergovernmental Organization
 * or submit itself to any jurisdiction.
 */

define([
  'js/deposit/extended_typeahead'
], function(ExtendedTypeahead) {

  function conferencesTypeahead($element) {
    $element.extendedTypeahead({
      suggestionTemplate: Hogan.compile(
        '<b>{{ title }}</b><br>' +
        '<small>' +
        '{{ date }}, {{ place }}<br>' +
        '{{ conference_id }}' +
        '</small>'
      ),
      selectedValueTemplate: Hogan.compile(
        '{{ title }}, {{ date }}, {{ place }}'
      ),
      cannotFindMessage: 'Cannot find this conference in our database.',
      extractRawValue: function(suggestionDataKey) {
        return suggestionDataKey.conference_id;
      },
      dataKey: 'conference',
      dataEngine: new Bloodhound({
        name: 'conferences',
        remote: '/search?cc=Conferences&p=conferences:%QUERY*&of=recjson',
        datumTokenizer: function() {},
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        limit: 100,
      })
    });

    return $element;
  }

  return conferencesTypeahead;
});
