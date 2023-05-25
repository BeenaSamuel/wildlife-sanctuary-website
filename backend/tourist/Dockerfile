#
# Build stage
#
FROM maven:3.8.2-jdk-11 AS build
COPY . .


#
# Package stage
#
FROM openjdk:17-jdk-slim
COPY --from=build /target/tourist-0.0.1-SNAPSHOT.jar tourist.jar
# ENV PORT=8081
EXPOSE 8081
ENTRYPOINT ["java","-jar","tourist.jar"]