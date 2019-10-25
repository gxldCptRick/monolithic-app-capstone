package edu.neumont.authenticationservice.models.mappers;

@FunctionalInterface
public interface MapTo<TSource, TDestination> {
    TDestination map(TSource source);
}
