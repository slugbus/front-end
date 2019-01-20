FROM golang:latest AS build
WORKDIR /home
COPY go.mod .
COPY go.sum .
RUN go get cloud.google.com/go
RUN go get firebase.google.com/go
RUN go get google.golang.org/api
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=build /home/app .
COPY firebase.json .
EXPOSE 8080
CMD ["./app"]
