package eu.revevol.configuration;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.guice.EndpointsModule;
import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.servlet.GuiceServletContextListener;
import eu.revevol.configuration.filters.HeaderCORSFilter;
import eu.revevol.configuration.filters.LogFilter;
import lombok.extern.slf4j.Slf4j;
import org.reflections.Reflections;

import javax.servlet.annotation.WebListener;
import java.util.Set;

@Slf4j
@WebListener
public class StartupListener extends GuiceServletContextListener {

    private static final String ROOT = "/_ah/api/*";

    @Override
    protected Injector getInjector() {
        return Guice.createInjector(
                new EndpointsModule() {
                    @Override
                    public void configureServlets() {
                        super.configureServlets();
                        filter(ROOT).through(LogFilter.class);
                        filter(ROOT).through(HeaderCORSFilter.class);
                        Reflections reflections = new Reflections("eu.revevol");
                        Set<Class<?>> endpoints = reflections.getTypesAnnotatedWith(Api.class);
                        configureEndpoints(ROOT, endpoints);
                    }
                }
        );
    }

}
