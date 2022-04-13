# Go

Go is `statically typed`, `natively compiled`, `garbage-collected`, `concurrent` programming language that belongs primarily to the `C` family of lang in terms of basic syntax.

# What is go

\- It is an open source programming language developed by google.

\- Easy to learn.

\- Built-in concurrency and a robust standard library.

\- Growing ecosystem of partners, communities, and tools.

# Create go program

```
go mod init foldername;
```

# How do we run go project

`Go` cli commands

\- **`go bulid:`** compiles a bunch of go source code files and create [filename].exe.

```
 go build main.go;
```

\- **`go run:`** Compiles and executes on or two files.

```
 go run main.go;
```

\- **`go fmt:`** Formats all the code in each file in the current directory.

```
go fmt
```

\- **`go install:`** Compiles and installs a package.

```
go install packagename;
```

\- **`go get:`** Download the new source code of someone else's packages.

```
go get
```

\- **`go test:`** Runs any test associated with the current project.

```
go test filename;
```

# What does mean `package main`;

`Packages == Project == Workspace`

Each go file must have fist line of `package main`

Inside go there are two different types of `packages`

1. Executale : Generate a file that we can run.
2. Resuable : Code used as helpers good place to put resuable logic.

**Executable package:**

`Package main =>` Defines a package that can be compiled and the _`executed`_ **Must have a func called main**

**Reusable package:**

`package calculator =>` Defines a package that can be used as dependency (helper code)

`package uploader =>` Defines a package that can be used as a dependency (helper code)

<br/>

# What does `import fmt` means

Package fmt implements formatted I/O with functions analogous to C's printf and scanf. The format 'verbs' are derived from C's but are simpler.

```
%v	the value in a default format	when printing structs, the plus flag (%+v) adds field names

%#v	a Go-syntax representation of the value

%T	a Go-syntax representation of the type of the value

%%	a literal percent sign; consumes no value

```
