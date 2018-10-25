$('.chips-autocomplete').chips({
  autocompleteOptions: {
    data: {
      'Front-end': null,
      'UX-designer': null,
      'Back-end': null
    },
    limit: 1,
    minLength: 1
  }
});
$('.chips-autocompleteDos').chips({
    autocompleteOptions: {
      data: {
        'JavaScript': null,
        'CSS': null,
        'HTML': null,
        'React': null,
        'Marvel': null,
        'Testing': null,
        'Prototipado': null,
        'Angular': null,
        'Node.js': null,
        'Git': null,
        'Bootstrap': null,
        'Card-sorting': null
      },
      limit: 8,
      minLength: 1
    }
  });
  $('.chips-autocompleteTres').chips({
    autocompleteOptions: {
      data: { 
        'Organización': null,
        'Responsabilidad': null,
        'Innovación': null,
        'Liderazgo': null,
        'Trabajo en Equipo': null,
        'Análisis': null,
        'Autoaprendizaje': null,
      },
      limit: 8,
      minLength: 1
    }
  });
  $('.chips-autocompleteCuatro').chips({
    autocompleteOptions: {
      data: { 
        'Inglés': null,
        'Francés': null,
        'Alemán': null,
      },
      limit: 3,
      minLength: 1
    }
  });
var chip = {
    tag: 'chip content',
    image: '', //optional
  };
  $('.chips-placeholder').chips({
    placeholder: 'Cuáles?',
    secondaryPlaceholder: '+Tag',
  });