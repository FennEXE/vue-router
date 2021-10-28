<template>
  <div class="container">
    <p>
      JavaScript, often abbreviated as JS, is a programming language that
      conforms to the ECMAScript specification. JavaScript is high-level, often
      just-in-time compiled and multi-paradigm. It has curly-bracket syntax,
      dynamic typing, prototype-based object-orientation and first-class
      functions.
    </p>

    <p>
      Alongside HTML and CSS, JavaScript is one of the core technologies of the
      World Wide Web. Over 97% of websites use it client-side for web page
      behavior, often incorporating third-party libraries. Most web browsers
      have a dedicated JavaScript engine to execute the code on the user's
      device.
    </p>

    <p>
      As a multi-paradigm language, JavaScript supports event-driven,
      functional, and imperative programming styles. It has application
      programming interfaces (APIs) for working with text, dates, regular
      expressions, standard data structures, and the Document Object Model
      (DOM).
    </p>

    <p>
      The ECMAScript standard does not include any input/output (I/O), such as
      networking, storage, or graphics facilities. In practice, the web browser
      or other runtime system provides JavaScript APIs for I/O. JavaScript
      engines were originally used only in web browsers, but they are now core
      components of other software systems, most notably servers and a variety
      of applications.
    </p>

    <p>
      Although there are similarities between JavaScript and Java, including
      language name, syntax, and respective standard libraries, the two
      languages are distinct and differ greatly in design.
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
