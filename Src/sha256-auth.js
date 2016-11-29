importPackage(Packages.com.vordel.trace);
importPackage(Packages.java.security);
importPackage(Packages.java.lang);
importPackage(Packages.javax.xml.bind);
importPackage(Packages.com.vordel.common.base64);

function invoke(msg) {
  // Get the Authorization header and decode it
  var authorization = msg.get("http.header.Authorization");
  authorization = com.vordel.common.base64.Decoder.decodeToString(authorization);

  var credentials = authorization.split(":");
  var login = credentials[0];
  var password = credentials[1];
  var salt = "crackme";

  // Convert javascript strings as Java strings
  login = new java.lang.String(login);
  password = new java.lang.String(password);
  salt = new java.lang.String(salt);

  // Hash the salt (first), the login (as part of the salt)
  // and the password (then) with SHA256
  md = MessageDigest.getInstance("SHA-256");
  md.update(salt.getBytes("UTF-8"));
  md.update(login.getBytes("UTF-8"));
  md.update(password.getBytes("UTF-8"));
  hash = md.digest();

  // Convert as hexadecimal output
  hash = DatatypeConverter.printHexBinary(hash);

  // Push back useful attributes
  msg.put("hash", hash);
  msg.put("login", login);

  return true;
}
