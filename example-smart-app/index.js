extractData().then(
    //Display Patient Demographics and Observations if extractData was success
    function(p) {
      drawVisualization(p);
    },

    //Display 'Failed to call FHIR Service' if extractData failed
    function() {
      $('#loading').hide();
      $('#errors').html('<p> Failed to call FHIR Service </p>');
    }
  );