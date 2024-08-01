# Use the official OpenJDK image as the base image
FROM openjdk:18-jdk-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from the host to the container
COPY target/spring-boot-library-0.0.1-SNAPSHOT.jar /app/spring-boot-library.jar

# Expose the port that the Spring Boot app will run on
EXPOSE 8080

# Command to run the JAR file
ENTRYPOINT ["java", "-jar", "/app/spring-boot-library.jar"]
