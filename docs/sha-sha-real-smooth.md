# sha sha real smooth

is that a good pun?

## what is a sha256/512?

sha is a hashing algorithm, what is that? well it allows you to
take some original text/binary data and then converts it into a garbeled
mess.

the same origianl text will output the same garbeled mess!

## why would anyone use that, why is that for?

lets say you want to store a password in your website, instead of storing
the password in "plaintext" (basically just storing it in plain text, its that
simple). we hash it first, and then store it.

everytime the user tries to log in, we hash what the user put, and compare
it to what we have stored!

and bam, logged in secure, and if we get hacked ppl cant get passwords!

## example

are ya running linux? (yay!!!)

then simply run `echo -n "wow" | sha256sum` and then you would
get the sha256 hash of the word "wow", which is
`b6dc933311bc2357cc5fc636a4dbe41a01b7a33b583d043a7f870f3440697e27` !

you can also use sha512sum instead

```sh
❯ echo -n "wow" | sha512sum
74c0f1e8aee1f831980e96d0a7772a05f4945500d4cbdaf19817c983b4404e7d949e1c90fcdbeacb6efc6f334fd22eb706f94b9ee45c4b9d6bad6e0a79c77cfd  -
```
