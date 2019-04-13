SHELL=/bin/bash

build: update pack

pack:
	cd output; zip -1r ../random_agent_spoofer-chentz-fx *
	mv random_agent_spoofer-chentz-fx.zip random_agent_spoofer-chentz-fx.xpi
	
AB='abc'
update:
	mkdir -p output
	rm -rf output/data output/lib output/doc
	cp -av data output/data
	cp -av doc output/doc
	cp -av lib output/lib
	cp -av *.rdf *.json *.js LICENSE output/
	#$(eval A:=$(shell grep 'version' package.json | cut -d ':' -f 2 | grep -Po '[0-9\.]+' ))
	#sed "s@0.9.5.6@$(A)@g" install.rdf > output/install.rdf
	
unpack:
	rm -rf old
	mkdir -p old
	unzip -d old random_agent_spoofer-0.9.5.6-fx.xpi

clean:
	rm -rf random_agent_spoofer-chentz* output old