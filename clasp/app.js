function claspTest1() {
  to = "xxxxx@xxxx"
  name="xxxx"
  from = "xxxx@xxxx"
  sender ="i"

  var subject ="MailTest of Google Apps Script";
  var body = name + " 様\n" + "テストメールを送ります。"

  /* メールを送信 */
  GmailApp.sendEmail(
    to,
    subject,
    body,
    {
      from: from,
      name: sender
    }
  )
}
