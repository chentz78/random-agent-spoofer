build: clean unpack update pack

pack:
	cd output; zip -1r ../random_agent_spoofer-chentz-fx *
	mv random_agent_spoofer-chentz-fx.zip random_agent_spoofer-chentz-fx.xpi
	
update:
	rm -rf output/data output/lib output/doc
	cp -av data output/data
	cp -av doc output/doc
	cp -av lib output/lib
	
unpack:
	unzip -d output random_agent_spoofer-0.9.5.6-fx.xpi

clean:
	rm -rf random_agent_spoofer-chentz* output