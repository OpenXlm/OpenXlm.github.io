// Example: Fetch $GREENX price
fetch('https://horizon-testnet.stellar.org/assets?asset_code=GREENX')
  .then(res => res.json())
  .then(data => {
    document.getElementById('greenx-price').innerText = `Price: $${data._embedded.records[0].price}`;
  });