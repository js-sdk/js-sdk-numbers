include builder/compile.mk

pre-build:
	-mkdir -p lib
	-mkdir -p dist

lib/numbers.js: src/index.js
	$(BABEL) $< -o $@

dist/numbers.js: src/index.js
	$(BABEL) $(CFLAGS) $< -o $@

dist/numbers.min.js: src/index.js
	$(BABEL) $(CFLAGS) --minified $< -o $@

dist-all: pre-build dist/numbers.js dist/numbers.min.js

examples/index.js: examples/src/index.js
	$(BROWSERIFY) $< -d -t babelify --outfile $@

all: test dist-all lib/numbers.js examples/index.js

clean:
	rm -rf lib dist examples/index.js

clean-all: clean
	rm -rf node_modules coverage
