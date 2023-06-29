export const CONSTANT = {


  /**
   * separator compound key
   */
  SEPARATOR: '-|-',
  SEPARATOR_REGEX: '-\\|-',
  SEPARATOR_DASH: '-',
  SEPARATOR_FILE: '/',

  BASIC: 'Basic ',
  BEARER: 'Bearer ',
// org.springframework.http.HttpHeaders.AUTHORIZATION
  AUTHORIZATION: 'Authorization',

//Joint Photographic Experts Group - JPEG
  EXT_JPEG: '.jpg',

  /*
  GsonBuilder gsonBuilder: new GsonBuilder().setDateFormat(new SimpleDateFormat('yyyy-MM-dd'T'HH:mm:ss.SSS'Z'', Locale.US).toPattern())
  'yyyy-MM-dd'T'HH:mm:ss.SSS'Z''
  'yyyy-MM-dd'T'HH:mm:ss'Z''
  'yyyy-MM-dd'T'HH:mm:ss.SSSXXX'
   */
  DATE_PATTERN_UTC: "yyyy-MM-dd'T'HH:mm:ss.SSS",
  DATE_PATTERN_ATT_DAILY: 'yyyyMMdd',
  DATE_PATTERN_DISPLAY_SHORT: 'EEE, MMM d yyyy', // Wed, Jul 4 2018

  CURRENCY_CHAR_RUPEE: '₹',
  CURRENCY_CHAR_DOLLAR: '$',
  CURRENCY_CHAR_BIRR: 'ብር', //Ethiopian birr Br ብር

  LENGTH_CELL_NUMBER_10: 10, // National number length
  LENGTH_CELL_NUMBER_9: 9, // National number length

  BATCH_SIZE_GQL_CLAUSE_IN: 25,
  BATCH_SIZE_TASK_QUEUE: 25,
  BATCH_SIZE_TASK_MAX_LOOP: 200,


};
