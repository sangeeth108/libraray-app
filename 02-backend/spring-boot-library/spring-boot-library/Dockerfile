# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the built JAR file from the local target directory to the container
COPY target/spring-boot-library.jar /app/spring-boot-library.jar

# Expose the port that the Spring Boot app runs on
EXPOSE 8080

# Command to run the JAR file
ENTRYPOINT ["java", "-jar", "/app/spring-boot-library.jar"]
