when you run `git ls-files foo/bar/**/*`

it returns
```
foo/bar/a.json
foo/bar/baz/b.json
```

but running `node index` returns
```
foo/bar/baz/b.json
```
