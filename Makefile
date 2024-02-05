PLUGIN_ID ?= com.example.my-react-plugin
PLUGIN_VERSION ?= 0.1.0
BUNDLE_NAME ?= $(PLUGIN_ID)-$(PLUGIN_VERSION).tar.gz

.PHONY: webapp
webapp:
	tar -czvf ./webapp/dist/$(BUNDLE_NAME) ./webapp/dist/main.js plugin.json;