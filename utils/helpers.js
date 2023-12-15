module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  trimString: function (passedString) {
      //add a blank space to the end to keep the last word from being cutoff on strings that are less than the max length.
      var passedString = passedString + " ";
      // maximum number of characters to extract
      var maxLength = 120;
      //trim the string to the maximum length
      var trimmedString = passedString.substr(0, maxLength);

      //re-trim if we are in the middle of a word
      trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + "...";

      return trimmedString;
    },
};
