import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: "crimson",
    marginBottom: 10,
    fontWeight: "bold",
    marginTop: 6,
    textAlign: "center",
  },
});

export const ratingImage = (rating) => {
  switch (rating) {
    case 1:
      return require("../assets/rating-1.png");
    case 2:
      return require("../assets/rating-2.png");
    case 3:
      return require("../assets/rating-3.png");
    case 4:
      return require("../assets/rating-4.png");
    case 5:
      return require("../assets/rating-5.png");
  }
};
