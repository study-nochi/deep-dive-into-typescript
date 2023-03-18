{
  const StatusCodes = {
    InternalServerError: 500,
    NotFound: 404,
    Ok: 200,
  } as const;

  StatusCodes.InternalServerError;

  type StatusCodeValue = typeof StatusCodes[keyof typeof StatusCodes];

  let statusCodeValue: StatusCodeValue;

  statusCodeValue = 200;
  //! statusCodeValue = -1;
}

{
  enum StatusCode {
    InternalServerError = 500,
    NotFound = 404,
    Ok = 200,
  }

  StatusCode.InternalServerError;

  let statusCode: StatusCode;

  statusCode = StatusCode.Ok;
  statusCode = 200;
}

{
  // var StatusCode;
  // (function (StatusCode) {
  //   StatusCode[(StatusCode["InternalServerError"] = 500)] =
  //     "InternalServerError";
  //   StatusCode[(StatusCode["NotFound"] = 404)] = "NotFound";
  //   StatusCode[(StatusCode["Ok"] = 200)] = "Ok";
  // });
}

{
  //* 자동 숫잣값
  enum VisualTheme {
    Dark,
    Light,
    System,
  }
}

{
  var VisualTheme;
  // (function (VisualTheme) {
  //   VisualTheme[(VisualTheme["Dark"] = 0)] = "Dark";
  //   VisualTheme[(VisualTheme["Ligth"] = 0)] = "Light";
  //   VisualTheme[(VisualTheme["System"] = 2)] = "Ststem";
  // })(VisualTheme || (VisualTheme = {}));
}
