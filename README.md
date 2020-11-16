# book-store

##Нужные для разработки кусочки кода)
* получить Id пользователя(только в контроллерах с директивой [Authorize])
```   
  var userId = int.Parse(User.FindFirst("id").Value);
```