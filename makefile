SHELL=/bin/bash

build: clean unpack update pack

pack:
	cd output; zip -1r ../random_agent_spoofer-chentz-fx *
	mv random_agent_spoofer-chentz-fx.zip random_agent_spoofer-chentz-fx.xpi
	
AB='abc'
update:
	rm -rf output/data output/lib output/doc
	cp -av data output/data
	cp -av doc output/doc
	cp -av lib output/lib
	$(eval A:=$(shell grep 'version' package.json | cut -d ':' -f 2 | grep -Po '[0-9\.]+' ))
	sed "s@0.9.5.6@$(A)@g" install.rdf > output/install.rdf
	
unpack:
	unzip -d output random_agent_spoofer-0.9.5.6-fx.xpi

clean:
	rm -rf random_agent_spoofer-chentz* output