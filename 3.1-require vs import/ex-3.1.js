// require vs import

//! Require:

// You can have dynamic loading where the loaded module name isn't predefined /static, or where you conditionally load a module only if it's "truly required" (depending on certain code flow).
// Loading is synchronous. That means if you have multiple requires, they are loaded and processed one by one.

// In NodeJS, require() is a built-in function to include external modules that exist in separate files.
// require() statement basically reads a JavaScript file, executes it,
// and then proceeds to return the export object. require()
// statement not only allows to add built-in core NodeJS modules but also community-based and local modules.

//! ES6 Imports:

// You can use named imports to selectively load only the pieces you need. That can save memory.
// Import can be asynchronous (and in current ES6 Module Loader, it in fact is) and can perform a little better.

// import() & export() statements are used to refer to an ES module.
// Other modules with file types such as .json cannot be imported with these statements.
// They are permitted to be used only in ES modules and the specifier of this statement can 
// either be a URL-style relative path or a package name. Also, the import statement cannot be used
// in embedded scripts unless such script has a type="module". A dynamic import can be used for
// scripts whose type is not “module”

// One of the major differences between require() and import() is that require() can be called from anywhere inside the program whereas 
// import() cannot be called conditionally, it always runs at the beginning of the file.
