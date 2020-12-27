//
// Definitions for schema: http://www.ignyte.com/whatsshowing
//  http://www.ignyte.com/webservices/ignyte.whatsshowing.webservice/moviefunctions.asmx?wsdl#types1
//
//
// Constructor for XML Schema item {http://www.ignyte.com/whatsshowing}UpcomingMovie
//
function www_ignyte_com_whatsshowing_UpcomingMovie () {
    this.typeMarker = 'www_ignyte_com_whatsshowing_UpcomingMovie';
    this._MovieName = null;
}

//
// accessor is www_ignyte_com_whatsshowing_UpcomingMovie.prototype.getMovieName
// element get for MovieName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for MovieName
// setter function is is www_ignyte_com_whatsshowing_UpcomingMovie.prototype.setMovieName
//
function www_ignyte_com_whatsshowing_UpcomingMovie_getMovieName() { return this._MovieName;}

www_ignyte_com_whatsshowing_UpcomingMovie.prototype.getMovieName = www_ignyte_com_whatsshowing_UpcomingMovie_getMovieName;

function www_ignyte_com_whatsshowing_UpcomingMovie_setMovieName(value) { this._MovieName = value;}

www_ignyte_com_whatsshowing_UpcomingMovie.prototype.setMovieName = www_ignyte_com_whatsshowing_UpcomingMovie_setMovieName;
//
// Serialize {http://www.ignyte.com/whatsshowing}UpcomingMovie
//
function www_ignyte_com_whatsshowing_UpcomingMovie_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://www.ignyte.com/whatsshowing\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._MovieName != null) {
      xml = xml + '<jns0:MovieName>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._MovieName);
      xml = xml + '</jns0:MovieName>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_ignyte_com_whatsshowing_UpcomingMovie.prototype.serialize = www_ignyte_com_whatsshowing_UpcomingMovie_serialize;

function www_ignyte_com_whatsshowing_UpcomingMovie_deserialize (cxfjsutils, element) {
    var newobject = new www_ignyte_com_whatsshowing_UpcomingMovie();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing MovieName');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://www.ignyte.com/whatsshowing', 'MovieName')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setMovieName(item);
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.ignyte.com/whatsshowing}ArrayOfUpcomingMovie
//
function www_ignyte_com_whatsshowing_ArrayOfUpcomingMovie () {
    this.typeMarker = 'www_ignyte_com_whatsshowing_ArrayOfUpcomingMovie';
    this._UpcomingMovie = [];
}

//
// accessor is www_ignyte_com_whatsshowing_ArrayOfUpcomingMovie.prototype.getUpcomingMovie
// element get for UpcomingMovie
// - element type is {http://www.ignyte.com/whatsshowing}UpcomingMovie
// - required element
// - array
// - nillable
//
// element set for UpcomingMovie
// setter function is is www_ignyte_com_whatsshowing_ArrayOfUpcomingMovie.prototype.setUpcomingMovie
//
function www_ignyte_com_whatsshowing_ArrayOfUpcomingMovie_getUpcomingMovie() { return this._UpcomingMovie;}

www_ignyte_com_whatsshowing_ArrayOfUpcomingMovie.prototype.getUpcomingMovie = www_ignyte_com_whatsshowing_ArrayOfUpcomingMovie_getUpcomingMovie;

function www_ignyte_com_whatsshowing_ArrayOfUpcomingMovie_setUpcomingMovie(value) { this._UpcomingMovie = value;}

www_ignyte_com_whatsshowing_ArrayOfUpcomingMovie.prototype.setUpcomingMovie = www_ignyte_com_whatsshowing_ArrayOfUpcomingMovie_setUpcomingMovie;
//
// Serialize {http://www.ignyte.com/whatsshowing}ArrayOfUpcomingMovie
//
function www_ignyte_com_whatsshowing_ArrayOfUpcomingMovie_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://www.ignyte.com/whatsshowing\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._UpcomingMovie != null) {
      for (var ax = 0;ax < this._UpcomingMovie.length;ax ++) {
       if (this._UpcomingMovie[ax] == null) {
        xml = xml + '<jns0:UpcomingMovie xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._UpcomingMovie[ax].serialize(cxfjsutils, 'jns0:UpcomingMovie', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_ignyte_com_whatsshowing_ArrayOfUpcomingMovie.prototype.serialize = www_ignyte_com_whatsshowing_ArrayOfUpcomingMovie_serialize;

function www_ignyte_com_whatsshowing_ArrayOfUpcomingMovie_deserialize (cxfjsutils, element) {
    var newobject = new www_ignyte_com_whatsshowing_ArrayOfUpcomingMovie();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing UpcomingMovie');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://www.ignyte.com/whatsshowing', 'UpcomingMovie')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = www_ignyte_com_whatsshowing_UpcomingMovie_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://www.ignyte.com/whatsshowing', 'UpcomingMovie'));
     newobject.setUpcomingMovie(item);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.ignyte.com/whatsshowing}Theater
//
function www_ignyte_com_whatsshowing_Theater () {
    this.typeMarker = 'www_ignyte_com_whatsshowing_Theater';
    this._Name = null;
    this._Address = null;
    this._Movies = null;
}

//
// accessor is www_ignyte_com_whatsshowing_Theater.prototype.getName
// element get for Name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for Name
// setter function is is www_ignyte_com_whatsshowing_Theater.prototype.setName
//
function www_ignyte_com_whatsshowing_Theater_getName() { return this._Name;}

www_ignyte_com_whatsshowing_Theater.prototype.getName = www_ignyte_com_whatsshowing_Theater_getName;

function www_ignyte_com_whatsshowing_Theater_setName(value) { this._Name = value;}

www_ignyte_com_whatsshowing_Theater.prototype.setName = www_ignyte_com_whatsshowing_Theater_setName;
//
// accessor is www_ignyte_com_whatsshowing_Theater.prototype.getAddress
// element get for Address
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for Address
// setter function is is www_ignyte_com_whatsshowing_Theater.prototype.setAddress
//
function www_ignyte_com_whatsshowing_Theater_getAddress() { return this._Address;}

www_ignyte_com_whatsshowing_Theater.prototype.getAddress = www_ignyte_com_whatsshowing_Theater_getAddress;

function www_ignyte_com_whatsshowing_Theater_setAddress(value) { this._Address = value;}

www_ignyte_com_whatsshowing_Theater.prototype.setAddress = www_ignyte_com_whatsshowing_Theater_setAddress;
//
// accessor is www_ignyte_com_whatsshowing_Theater.prototype.getMovies
// element get for Movies
// - element type is {http://www.ignyte.com/whatsshowing}ArrayOfMovie
// - optional element
//
// element set for Movies
// setter function is is www_ignyte_com_whatsshowing_Theater.prototype.setMovies
//
function www_ignyte_com_whatsshowing_Theater_getMovies() { return this._Movies;}

www_ignyte_com_whatsshowing_Theater.prototype.getMovies = www_ignyte_com_whatsshowing_Theater_getMovies;

function www_ignyte_com_whatsshowing_Theater_setMovies(value) { this._Movies = value;}

www_ignyte_com_whatsshowing_Theater.prototype.setMovies = www_ignyte_com_whatsshowing_Theater_setMovies;
//
// Serialize {http://www.ignyte.com/whatsshowing}Theater
//
function www_ignyte_com_whatsshowing_Theater_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://www.ignyte.com/whatsshowing\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Name != null) {
      xml = xml + '<jns0:Name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Name);
      xml = xml + '</jns0:Name>';
     }
    }
    // block for local variables
    {
     if (this._Address != null) {
      xml = xml + '<jns0:Address>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Address);
      xml = xml + '</jns0:Address>';
     }
    }
    // block for local variables
    {
     if (this._Movies != null) {
      xml = xml + this._Movies.serialize(cxfjsutils, 'jns0:Movies', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_ignyte_com_whatsshowing_Theater.prototype.serialize = www_ignyte_com_whatsshowing_Theater_serialize;

function www_ignyte_com_whatsshowing_Theater_deserialize (cxfjsutils, element) {
    var newobject = new www_ignyte_com_whatsshowing_Theater();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://www.ignyte.com/whatsshowing', 'Name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setName(item);
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Address');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://www.ignyte.com/whatsshowing', 'Address')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setAddress(item);
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Movies');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://www.ignyte.com/whatsshowing', 'Movies')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = www_ignyte_com_whatsshowing_ArrayOfMovie_deserialize(cxfjsutils, curElement);
     }
     newobject.setMovies(item);
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.ignyte.com/whatsshowing}ArrayOfTheater
//
function www_ignyte_com_whatsshowing_ArrayOfTheater () {
    this.typeMarker = 'www_ignyte_com_whatsshowing_ArrayOfTheater';
    this._Theater = [];
}

//
// accessor is www_ignyte_com_whatsshowing_ArrayOfTheater.prototype.getTheater
// element get for Theater
// - element type is {http://www.ignyte.com/whatsshowing}Theater
// - required element
// - array
// - nillable
//
// element set for Theater
// setter function is is www_ignyte_com_whatsshowing_ArrayOfTheater.prototype.setTheater
//
function www_ignyte_com_whatsshowing_ArrayOfTheater_getTheater() { return this._Theater;}

www_ignyte_com_whatsshowing_ArrayOfTheater.prototype.getTheater = www_ignyte_com_whatsshowing_ArrayOfTheater_getTheater;

function www_ignyte_com_whatsshowing_ArrayOfTheater_setTheater(value) { this._Theater = value;}

www_ignyte_com_whatsshowing_ArrayOfTheater.prototype.setTheater = www_ignyte_com_whatsshowing_ArrayOfTheater_setTheater;
//
// Serialize {http://www.ignyte.com/whatsshowing}ArrayOfTheater
//
function www_ignyte_com_whatsshowing_ArrayOfTheater_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://www.ignyte.com/whatsshowing\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Theater != null) {
      for (var ax = 0;ax < this._Theater.length;ax ++) {
       if (this._Theater[ax] == null) {
        xml = xml + '<jns0:Theater xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._Theater[ax].serialize(cxfjsutils, 'jns0:Theater', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_ignyte_com_whatsshowing_ArrayOfTheater.prototype.serialize = www_ignyte_com_whatsshowing_ArrayOfTheater_serialize;

function www_ignyte_com_whatsshowing_ArrayOfTheater_deserialize (cxfjsutils, element) {
    var newobject = new www_ignyte_com_whatsshowing_ArrayOfTheater();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Theater');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://www.ignyte.com/whatsshowing', 'Theater')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = www_ignyte_com_whatsshowing_Theater_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://www.ignyte.com/whatsshowing', 'Theater'));
     newobject.setTheater(item);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.ignyte.com/whatsshowing}Movie
//
function www_ignyte_com_whatsshowing_Movie () {
    this.typeMarker = 'www_ignyte_com_whatsshowing_Movie';
    this._Rating = null;
    this._Name = null;
    this._RunningTime = null;
    this._ShowTimes = null;
}

//
// accessor is www_ignyte_com_whatsshowing_Movie.prototype.getRating
// element get for Rating
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for Rating
// setter function is is www_ignyte_com_whatsshowing_Movie.prototype.setRating
//
function www_ignyte_com_whatsshowing_Movie_getRating() { return this._Rating;}

www_ignyte_com_whatsshowing_Movie.prototype.getRating = www_ignyte_com_whatsshowing_Movie_getRating;

function www_ignyte_com_whatsshowing_Movie_setRating(value) { this._Rating = value;}

www_ignyte_com_whatsshowing_Movie.prototype.setRating = www_ignyte_com_whatsshowing_Movie_setRating;
//
// accessor is www_ignyte_com_whatsshowing_Movie.prototype.getName
// element get for Name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for Name
// setter function is is www_ignyte_com_whatsshowing_Movie.prototype.setName
//
function www_ignyte_com_whatsshowing_Movie_getName() { return this._Name;}

www_ignyte_com_whatsshowing_Movie.prototype.getName = www_ignyte_com_whatsshowing_Movie_getName;

function www_ignyte_com_whatsshowing_Movie_setName(value) { this._Name = value;}

www_ignyte_com_whatsshowing_Movie.prototype.setName = www_ignyte_com_whatsshowing_Movie_setName;
//
// accessor is www_ignyte_com_whatsshowing_Movie.prototype.getRunningTime
// element get for RunningTime
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for RunningTime
// setter function is is www_ignyte_com_whatsshowing_Movie.prototype.setRunningTime
//
function www_ignyte_com_whatsshowing_Movie_getRunningTime() { return this._RunningTime;}

www_ignyte_com_whatsshowing_Movie.prototype.getRunningTime = www_ignyte_com_whatsshowing_Movie_getRunningTime;

function www_ignyte_com_whatsshowing_Movie_setRunningTime(value) { this._RunningTime = value;}

www_ignyte_com_whatsshowing_Movie.prototype.setRunningTime = www_ignyte_com_whatsshowing_Movie_setRunningTime;
//
// accessor is www_ignyte_com_whatsshowing_Movie.prototype.getShowTimes
// element get for ShowTimes
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for ShowTimes
// setter function is is www_ignyte_com_whatsshowing_Movie.prototype.setShowTimes
//
function www_ignyte_com_whatsshowing_Movie_getShowTimes() { return this._ShowTimes;}

www_ignyte_com_whatsshowing_Movie.prototype.getShowTimes = www_ignyte_com_whatsshowing_Movie_getShowTimes;

function www_ignyte_com_whatsshowing_Movie_setShowTimes(value) { this._ShowTimes = value;}

www_ignyte_com_whatsshowing_Movie.prototype.setShowTimes = www_ignyte_com_whatsshowing_Movie_setShowTimes;
//
// Serialize {http://www.ignyte.com/whatsshowing}Movie
//
function www_ignyte_com_whatsshowing_Movie_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://www.ignyte.com/whatsshowing\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Rating != null) {
      xml = xml + '<jns0:Rating>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Rating);
      xml = xml + '</jns0:Rating>';
     }
    }
    // block for local variables
    {
     if (this._Name != null) {
      xml = xml + '<jns0:Name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._Name);
      xml = xml + '</jns0:Name>';
     }
    }
    // block for local variables
    {
     if (this._RunningTime != null) {
      xml = xml + '<jns0:RunningTime>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._RunningTime);
      xml = xml + '</jns0:RunningTime>';
     }
    }
    // block for local variables
    {
     if (this._ShowTimes != null) {
      xml = xml + '<jns0:ShowTimes>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._ShowTimes);
      xml = xml + '</jns0:ShowTimes>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_ignyte_com_whatsshowing_Movie.prototype.serialize = www_ignyte_com_whatsshowing_Movie_serialize;

function www_ignyte_com_whatsshowing_Movie_deserialize (cxfjsutils, element) {
    var newobject = new www_ignyte_com_whatsshowing_Movie();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Rating');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://www.ignyte.com/whatsshowing', 'Rating')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setRating(item);
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://www.ignyte.com/whatsshowing', 'Name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setName(item);
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing RunningTime');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://www.ignyte.com/whatsshowing', 'RunningTime')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setRunningTime(item);
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ShowTimes');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://www.ignyte.com/whatsshowing', 'ShowTimes')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setShowTimes(item);
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.ignyte.com/whatsshowing}ArrayOfMovie
//
function www_ignyte_com_whatsshowing_ArrayOfMovie () {
    this.typeMarker = 'www_ignyte_com_whatsshowing_ArrayOfMovie';
    this._Movie = [];
}

//
// accessor is www_ignyte_com_whatsshowing_ArrayOfMovie.prototype.getMovie
// element get for Movie
// - element type is {http://www.ignyte.com/whatsshowing}Movie
// - required element
// - array
// - nillable
//
// element set for Movie
// setter function is is www_ignyte_com_whatsshowing_ArrayOfMovie.prototype.setMovie
//
function www_ignyte_com_whatsshowing_ArrayOfMovie_getMovie() { return this._Movie;}

www_ignyte_com_whatsshowing_ArrayOfMovie.prototype.getMovie = www_ignyte_com_whatsshowing_ArrayOfMovie_getMovie;

function www_ignyte_com_whatsshowing_ArrayOfMovie_setMovie(value) { this._Movie = value;}

www_ignyte_com_whatsshowing_ArrayOfMovie.prototype.setMovie = www_ignyte_com_whatsshowing_ArrayOfMovie_setMovie;
//
// Serialize {http://www.ignyte.com/whatsshowing}ArrayOfMovie
//
function www_ignyte_com_whatsshowing_ArrayOfMovie_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://www.ignyte.com/whatsshowing\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._Movie != null) {
      for (var ax = 0;ax < this._Movie.length;ax ++) {
       if (this._Movie[ax] == null) {
        xml = xml + '<jns0:Movie xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._Movie[ax].serialize(cxfjsutils, 'jns0:Movie', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_ignyte_com_whatsshowing_ArrayOfMovie.prototype.serialize = www_ignyte_com_whatsshowing_ArrayOfMovie_serialize;

function www_ignyte_com_whatsshowing_ArrayOfMovie_deserialize (cxfjsutils, element) {
    var newobject = new www_ignyte_com_whatsshowing_ArrayOfMovie();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing Movie');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://www.ignyte.com/whatsshowing', 'Movie')) {
     item = [];
     do  {
      var arrayItem;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = www_ignyte_com_whatsshowing_Movie_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://www.ignyte.com/whatsshowing', 'Movie'));
     newobject.setMovie(item);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.ignyte.com/whatsshowing}GetUpcomingMoviesResponse
//
function www_ignyte_com_whatsshowing_GetUpcomingMoviesResponse () {
    this.typeMarker = 'www_ignyte_com_whatsshowing_GetUpcomingMoviesResponse';
    this._GetUpcomingMoviesResult = null;
}

//
// accessor is www_ignyte_com_whatsshowing_GetUpcomingMoviesResponse.prototype.getGetUpcomingMoviesResult
// element get for GetUpcomingMoviesResult
// - element type is {http://www.ignyte.com/whatsshowing}ArrayOfUpcomingMovie
// - optional element
//
// element set for GetUpcomingMoviesResult
// setter function is is www_ignyte_com_whatsshowing_GetUpcomingMoviesResponse.prototype.setGetUpcomingMoviesResult
//
function www_ignyte_com_whatsshowing_GetUpcomingMoviesResponse_getGetUpcomingMoviesResult() { return this._GetUpcomingMoviesResult;}

www_ignyte_com_whatsshowing_GetUpcomingMoviesResponse.prototype.getGetUpcomingMoviesResult = www_ignyte_com_whatsshowing_GetUpcomingMoviesResponse_getGetUpcomingMoviesResult;

function www_ignyte_com_whatsshowing_GetUpcomingMoviesResponse_setGetUpcomingMoviesResult(value) { this._GetUpcomingMoviesResult = value;}

www_ignyte_com_whatsshowing_GetUpcomingMoviesResponse.prototype.setGetUpcomingMoviesResult = www_ignyte_com_whatsshowing_GetUpcomingMoviesResponse_setGetUpcomingMoviesResult;
//
// Serialize {http://www.ignyte.com/whatsshowing}GetUpcomingMoviesResponse
//
function www_ignyte_com_whatsshowing_GetUpcomingMoviesResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://www.ignyte.com/whatsshowing\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._GetUpcomingMoviesResult != null) {
      xml = xml + this._GetUpcomingMoviesResult.serialize(cxfjsutils, 'jns0:GetUpcomingMoviesResult', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_ignyte_com_whatsshowing_GetUpcomingMoviesResponse.prototype.serialize = www_ignyte_com_whatsshowing_GetUpcomingMoviesResponse_serialize;

function www_ignyte_com_whatsshowing_GetUpcomingMoviesResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_ignyte_com_whatsshowing_GetUpcomingMoviesResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing GetUpcomingMoviesResult');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://www.ignyte.com/whatsshowing', 'GetUpcomingMoviesResult')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = www_ignyte_com_whatsshowing_ArrayOfUpcomingMovie_deserialize(cxfjsutils, curElement);
     }
     newobject.setGetUpcomingMoviesResult(item);
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.ignyte.com/whatsshowing}GetUpcomingMovies
//
function www_ignyte_com_whatsshowing_GetUpcomingMovies () {
    this.typeMarker = 'www_ignyte_com_whatsshowing_GetUpcomingMovies';
    this._month = 0;
    this._year = 0;
}

//
// accessor is www_ignyte_com_whatsshowing_GetUpcomingMovies.prototype.getMonth
// element get for month
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for month
// setter function is is www_ignyte_com_whatsshowing_GetUpcomingMovies.prototype.setMonth
//
function www_ignyte_com_whatsshowing_GetUpcomingMovies_getMonth() { return this._month;}

www_ignyte_com_whatsshowing_GetUpcomingMovies.prototype.getMonth = www_ignyte_com_whatsshowing_GetUpcomingMovies_getMonth;

function www_ignyte_com_whatsshowing_GetUpcomingMovies_setMonth(value) { this._month = value;}

www_ignyte_com_whatsshowing_GetUpcomingMovies.prototype.setMonth = www_ignyte_com_whatsshowing_GetUpcomingMovies_setMonth;
//
// accessor is www_ignyte_com_whatsshowing_GetUpcomingMovies.prototype.getYear
// element get for year
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for year
// setter function is is www_ignyte_com_whatsshowing_GetUpcomingMovies.prototype.setYear
//
function www_ignyte_com_whatsshowing_GetUpcomingMovies_getYear() { return this._year;}

www_ignyte_com_whatsshowing_GetUpcomingMovies.prototype.getYear = www_ignyte_com_whatsshowing_GetUpcomingMovies_getYear;

function www_ignyte_com_whatsshowing_GetUpcomingMovies_setYear(value) { this._year = value;}

www_ignyte_com_whatsshowing_GetUpcomingMovies.prototype.setYear = www_ignyte_com_whatsshowing_GetUpcomingMovies_setYear;
//
// Serialize {http://www.ignyte.com/whatsshowing}GetUpcomingMovies
//
function www_ignyte_com_whatsshowing_GetUpcomingMovies_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://www.ignyte.com/whatsshowing\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:month>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._month);
     xml = xml + '</jns0:month>';
    }
    // block for local variables
    {
     xml = xml + '<jns0:year>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._year);
     xml = xml + '</jns0:year>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_ignyte_com_whatsshowing_GetUpcomingMovies.prototype.serialize = www_ignyte_com_whatsshowing_GetUpcomingMovies_serialize;

function www_ignyte_com_whatsshowing_GetUpcomingMovies_deserialize (cxfjsutils, element) {
    var newobject = new www_ignyte_com_whatsshowing_GetUpcomingMovies();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing month');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setMonth(item);
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing year');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setYear(item);
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.ignyte.com/whatsshowing}GetTheatersAndMoviesResponse
//
function www_ignyte_com_whatsshowing_GetTheatersAndMoviesResponse () {
    this.typeMarker = 'www_ignyte_com_whatsshowing_GetTheatersAndMoviesResponse';
    this._GetTheatersAndMoviesResult = null;
}

//
// accessor is www_ignyte_com_whatsshowing_GetTheatersAndMoviesResponse.prototype.getGetTheatersAndMoviesResult
// element get for GetTheatersAndMoviesResult
// - element type is {http://www.ignyte.com/whatsshowing}ArrayOfTheater
// - optional element
//
// element set for GetTheatersAndMoviesResult
// setter function is is www_ignyte_com_whatsshowing_GetTheatersAndMoviesResponse.prototype.setGetTheatersAndMoviesResult
//
function www_ignyte_com_whatsshowing_GetTheatersAndMoviesResponse_getGetTheatersAndMoviesResult() { return this._GetTheatersAndMoviesResult;}

www_ignyte_com_whatsshowing_GetTheatersAndMoviesResponse.prototype.getGetTheatersAndMoviesResult = www_ignyte_com_whatsshowing_GetTheatersAndMoviesResponse_getGetTheatersAndMoviesResult;

function www_ignyte_com_whatsshowing_GetTheatersAndMoviesResponse_setGetTheatersAndMoviesResult(value) { this._GetTheatersAndMoviesResult = value;}

www_ignyte_com_whatsshowing_GetTheatersAndMoviesResponse.prototype.setGetTheatersAndMoviesResult = www_ignyte_com_whatsshowing_GetTheatersAndMoviesResponse_setGetTheatersAndMoviesResult;
//
// Serialize {http://www.ignyte.com/whatsshowing}GetTheatersAndMoviesResponse
//
function www_ignyte_com_whatsshowing_GetTheatersAndMoviesResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://www.ignyte.com/whatsshowing\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._GetTheatersAndMoviesResult != null) {
      xml = xml + this._GetTheatersAndMoviesResult.serialize(cxfjsutils, 'jns0:GetTheatersAndMoviesResult', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_ignyte_com_whatsshowing_GetTheatersAndMoviesResponse.prototype.serialize = www_ignyte_com_whatsshowing_GetTheatersAndMoviesResponse_serialize;

function www_ignyte_com_whatsshowing_GetTheatersAndMoviesResponse_deserialize (cxfjsutils, element) {
    var newobject = new www_ignyte_com_whatsshowing_GetTheatersAndMoviesResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing GetTheatersAndMoviesResult');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://www.ignyte.com/whatsshowing', 'GetTheatersAndMoviesResult')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = www_ignyte_com_whatsshowing_ArrayOfTheater_deserialize(cxfjsutils, curElement);
     }
     newobject.setGetTheatersAndMoviesResult(item);
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://www.ignyte.com/whatsshowing}GetTheatersAndMovies
//
function www_ignyte_com_whatsshowing_GetTheatersAndMovies () {
    this.typeMarker = 'www_ignyte_com_whatsshowing_GetTheatersAndMovies';
    this._zipCode = null;
    this._radius = 0;
}

//
// accessor is www_ignyte_com_whatsshowing_GetTheatersAndMovies.prototype.getZipCode
// element get for zipCode
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for zipCode
// setter function is is www_ignyte_com_whatsshowing_GetTheatersAndMovies.prototype.setZipCode
//
function www_ignyte_com_whatsshowing_GetTheatersAndMovies_getZipCode() { return this._zipCode;}

www_ignyte_com_whatsshowing_GetTheatersAndMovies.prototype.getZipCode = www_ignyte_com_whatsshowing_GetTheatersAndMovies_getZipCode;

function www_ignyte_com_whatsshowing_GetTheatersAndMovies_setZipCode(value) { this._zipCode = value;}

www_ignyte_com_whatsshowing_GetTheatersAndMovies.prototype.setZipCode = www_ignyte_com_whatsshowing_GetTheatersAndMovies_setZipCode;
//
// accessor is www_ignyte_com_whatsshowing_GetTheatersAndMovies.prototype.getRadius
// element get for radius
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for radius
// setter function is is www_ignyte_com_whatsshowing_GetTheatersAndMovies.prototype.setRadius
//
function www_ignyte_com_whatsshowing_GetTheatersAndMovies_getRadius() { return this._radius;}

www_ignyte_com_whatsshowing_GetTheatersAndMovies.prototype.getRadius = www_ignyte_com_whatsshowing_GetTheatersAndMovies_getRadius;

function www_ignyte_com_whatsshowing_GetTheatersAndMovies_setRadius(value) { this._radius = value;}

www_ignyte_com_whatsshowing_GetTheatersAndMovies.prototype.setRadius = www_ignyte_com_whatsshowing_GetTheatersAndMovies_setRadius;
//
// Serialize {http://www.ignyte.com/whatsshowing}GetTheatersAndMovies
//
function www_ignyte_com_whatsshowing_GetTheatersAndMovies_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     xml = xml + ' ';
     xml = xml + 'xmlns:jns0=\'http://www.ignyte.com/whatsshowing\' ';
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._zipCode != null) {
      xml = xml + '<jns0:zipCode>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._zipCode);
      xml = xml + '</jns0:zipCode>';
     }
    }
    // block for local variables
    {
     xml = xml + '<jns0:radius>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._radius);
     xml = xml + '</jns0:radius>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

www_ignyte_com_whatsshowing_GetTheatersAndMovies.prototype.serialize = www_ignyte_com_whatsshowing_GetTheatersAndMovies_serialize;

function www_ignyte_com_whatsshowing_GetTheatersAndMovies_deserialize (cxfjsutils, element) {
    var newobject = new www_ignyte_com_whatsshowing_GetTheatersAndMovies();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing zipCode');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, 'http://www.ignyte.com/whatsshowing', 'zipCode')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setZipCode(item);
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing radius');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setRadius(item);
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Definitions for service: {http://www.ignyte.com/whatsshowing}MovieInformation
//

// Javascript for {http://www.ignyte.com/whatsshowing}MovieInformationSoap

function www_ignyte_com_whatsshowing_MovieInformationSoap () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{http://www.ignyte.com/whatsshowing}GetUpcomingMoviesResponse'] = www_ignyte_com_whatsshowing_GetUpcomingMoviesResponse_serialize;
    this.globalElementDeserializers['{http://www.ignyte.com/whatsshowing}GetUpcomingMoviesResponse'] = www_ignyte_com_whatsshowing_GetUpcomingMoviesResponse_deserialize;
    this.globalElementSerializers['{http://www.ignyte.com/whatsshowing}GetUpcomingMovies'] = www_ignyte_com_whatsshowing_GetUpcomingMovies_serialize;
    this.globalElementDeserializers['{http://www.ignyte.com/whatsshowing}GetUpcomingMovies'] = www_ignyte_com_whatsshowing_GetUpcomingMovies_deserialize;
    this.globalElementSerializers['{http://www.ignyte.com/whatsshowing}GetTheatersAndMoviesResponse'] = www_ignyte_com_whatsshowing_GetTheatersAndMoviesResponse_serialize;
    this.globalElementDeserializers['{http://www.ignyte.com/whatsshowing}GetTheatersAndMoviesResponse'] = www_ignyte_com_whatsshowing_GetTheatersAndMoviesResponse_deserialize;
    this.globalElementSerializers['{http://www.ignyte.com/whatsshowing}GetTheatersAndMovies'] = www_ignyte_com_whatsshowing_GetTheatersAndMovies_serialize;
    this.globalElementDeserializers['{http://www.ignyte.com/whatsshowing}GetTheatersAndMovies'] = www_ignyte_com_whatsshowing_GetTheatersAndMovies_deserialize;
    this.globalElementSerializers['{http://www.ignyte.com/whatsshowing}UpcomingMovie'] = www_ignyte_com_whatsshowing_UpcomingMovie_serialize;
    this.globalElementDeserializers['{http://www.ignyte.com/whatsshowing}UpcomingMovie'] = www_ignyte_com_whatsshowing_UpcomingMovie_deserialize;
    this.globalElementSerializers['{http://www.ignyte.com/whatsshowing}ArrayOfUpcomingMovie'] = www_ignyte_com_whatsshowing_ArrayOfUpcomingMovie_serialize;
    this.globalElementDeserializers['{http://www.ignyte.com/whatsshowing}ArrayOfUpcomingMovie'] = www_ignyte_com_whatsshowing_ArrayOfUpcomingMovie_deserialize;
    this.globalElementSerializers['{http://www.ignyte.com/whatsshowing}Theater'] = www_ignyte_com_whatsshowing_Theater_serialize;
    this.globalElementDeserializers['{http://www.ignyte.com/whatsshowing}Theater'] = www_ignyte_com_whatsshowing_Theater_deserialize;
    this.globalElementSerializers['{http://www.ignyte.com/whatsshowing}ArrayOfTheater'] = www_ignyte_com_whatsshowing_ArrayOfTheater_serialize;
    this.globalElementDeserializers['{http://www.ignyte.com/whatsshowing}ArrayOfTheater'] = www_ignyte_com_whatsshowing_ArrayOfTheater_deserialize;
    this.globalElementSerializers['{http://www.ignyte.com/whatsshowing}Movie'] = www_ignyte_com_whatsshowing_Movie_serialize;
    this.globalElementDeserializers['{http://www.ignyte.com/whatsshowing}Movie'] = www_ignyte_com_whatsshowing_Movie_deserialize;
    this.globalElementSerializers['{http://www.ignyte.com/whatsshowing}ArrayOfMovie'] = www_ignyte_com_whatsshowing_ArrayOfMovie_serialize;
    this.globalElementDeserializers['{http://www.ignyte.com/whatsshowing}ArrayOfMovie'] = www_ignyte_com_whatsshowing_ArrayOfMovie_deserialize;
}

function www_ignyte_com_whatsshowing_GetUpcomingMovies_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_ignyte_com_whatsshowing_GetUpcomingMoviesSoapOut_deserializeResponse');
     responseObject = www_ignyte_com_whatsshowing_GetUpcomingMoviesSoapOut_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_ignyte_com_whatsshowing_MovieInformationSoap.prototype.GetUpcomingMovies_onsuccess = www_ignyte_com_whatsshowing_GetUpcomingMovies_op_onsuccess;

function www_ignyte_com_whatsshowing_GetUpcomingMovies_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_ignyte_com_whatsshowing_MovieInformationSoap.prototype.GetUpcomingMovies_onerror = www_ignyte_com_whatsshowing_GetUpcomingMovies_op_onerror;

//
// Operation {http://www.ignyte.com/whatsshowing}GetUpcomingMovies
// Wrapped operation.
// parameter month
// - simple type {http://www.w3.org/2001/XMLSchema}int// parameter year
// - simple type {http://www.w3.org/2001/XMLSchema}int//
function www_ignyte_com_whatsshowing_GetUpcomingMovies_op(successCallback, errorCallback, month, year) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = month;
    args[1] = year;
    xml = this.GetUpcomingMoviesSoapIn_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.GetUpcomingMovies_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.GetUpcomingMovies_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.ignyte.com/whatsshowing/GetUpcomingMovies';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_ignyte_com_whatsshowing_MovieInformationSoap.prototype.GetUpcomingMovies = www_ignyte_com_whatsshowing_GetUpcomingMovies_op;

function www_ignyte_com_whatsshowing_GetUpcomingMoviesSoapIn_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_ignyte_com_whatsshowing_GetUpcomingMovies();
    wrapperObj.setMonth(args[0]);
    wrapperObj.setYear(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.ignyte.com/whatsshowing' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:GetUpcomingMovies', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_ignyte_com_whatsshowing_MovieInformationSoap.prototype.GetUpcomingMoviesSoapIn_serializeInput = www_ignyte_com_whatsshowing_GetUpcomingMoviesSoapIn_serializeInput;

function www_ignyte_com_whatsshowing_GetUpcomingMoviesSoapOut_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = www_ignyte_com_whatsshowing_GetUpcomingMoviesResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function www_ignyte_com_whatsshowing_GetTheatersAndMovies_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling www_ignyte_com_whatsshowing_GetTheatersAndMoviesSoapOut_deserializeResponse');
     responseObject = www_ignyte_com_whatsshowing_GetTheatersAndMoviesSoapOut_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

www_ignyte_com_whatsshowing_MovieInformationSoap.prototype.GetTheatersAndMovies_onsuccess = www_ignyte_com_whatsshowing_GetTheatersAndMovies_op_onsuccess;

function www_ignyte_com_whatsshowing_GetTheatersAndMovies_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

www_ignyte_com_whatsshowing_MovieInformationSoap.prototype.GetTheatersAndMovies_onerror = www_ignyte_com_whatsshowing_GetTheatersAndMovies_op_onerror;

//
// Operation {http://www.ignyte.com/whatsshowing}GetTheatersAndMovies
// Wrapped operation.
// parameter zipCode
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter radius
// - simple type {http://www.w3.org/2001/XMLSchema}int//
function www_ignyte_com_whatsshowing_GetTheatersAndMovies_op(successCallback, errorCallback, zipCode, radius) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = zipCode;
    args[1] = radius;
    xml = this.GetTheatersAndMoviesSoapIn_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.GetTheatersAndMovies_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.GetTheatersAndMovies_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = 'http://www.ignyte.com/whatsshowing/GetTheatersAndMovies';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

www_ignyte_com_whatsshowing_MovieInformationSoap.prototype.GetTheatersAndMovies = www_ignyte_com_whatsshowing_GetTheatersAndMovies_op;

function www_ignyte_com_whatsshowing_GetTheatersAndMoviesSoapIn_serializeInput(cxfjsutils, args) {
    var wrapperObj = new www_ignyte_com_whatsshowing_GetTheatersAndMovies();
    wrapperObj.setZipCode(args[0]);
    wrapperObj.setRadius(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://www.ignyte.com/whatsshowing' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:GetTheatersAndMovies', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

www_ignyte_com_whatsshowing_MovieInformationSoap.prototype.GetTheatersAndMoviesSoapIn_serializeInput = www_ignyte_com_whatsshowing_GetTheatersAndMoviesSoapIn_serializeInput;

function www_ignyte_com_whatsshowing_GetTheatersAndMoviesSoapOut_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = www_ignyte_com_whatsshowing_GetTheatersAndMoviesResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function www_ignyte_com_whatsshowing_MovieInformationSoap_www_ignyte_com_whatsshowing_MovieInformationSoap () {
  this.url = 'http://www.ignyte.com/webservices/ignyte.whatsshowing.webservice/moviefunctions.asmx';
}
www_ignyte_com_whatsshowing_MovieInformationSoap_www_ignyte_com_whatsshowing_MovieInformationSoap.prototype = new www_ignyte_com_whatsshowing_MovieInformationSoap;
function www_ignyte_com_whatsshowing_MovieInformationSoap_www_ignyte_com_whatsshowing_MovieInformationSoap12 () {
  this.url = 'http://www.ignyte.com/webservices/ignyte.whatsshowing.webservice/moviefunctions.asmx';
}
www_ignyte_com_whatsshowing_MovieInformationSoap_www_ignyte_com_whatsshowing_MovieInformationSoap12.prototype = new www_ignyte_com_whatsshowing_MovieInformationSoap;
