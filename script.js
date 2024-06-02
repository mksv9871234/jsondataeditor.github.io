function convertToJson() {
    const brand = document.getElementById('brand').value;
    const name = document.getElementById('name').value;
    const amazonLink = document.getElementById('amazonLink').value;
    const status = document.getElementById('status').value;
    const launchDate = document.getElementById('launchDate').value;
    const imageSrc = document.getElementById('imageSrc').value;
    const photoCount = document.getElementById('photoCount').value;
    const processor = document.getElementById('processor').value;
    const CPU = document.getElementById('CPU').value;
    const Architecture = document.getElementById('Architecture').value;
    const Graphics = document.getElementById('Graphics').value;
    const ram = document.getElementById('ram').value;
    const OS = document.getElementById('OS').value;
    const display = document.getElementById('display').value;
    const displaytype = document.getElementById('displaytype').value;
    const Resolution = document.getElementById('Resolution').value;
    const pixeldencity = document.getElementById('pixeldencity').value;
    const rearcamera = document.getElementById('rearcamera').value;
    const rearcamerafeatures = document.getElementById('rearcamerafeatures').value;
    const rearcameravideo = document.getElementById('rearcameravideo').value;
    const frontcamera = document.getElementById('frontcamera').value;
    const frontcameravideo = document.getElementById('frontcameravideo').value;
    const frontcamerafeatures = document.getElementById('frontcamerafeatures').value;
    const battery = document.getElementById('battery').value;
    const charging = document.getElementById('charging').value;
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const color = document.getElementById('color').value;
    const build = document.getElementById('build').value;
    const loudspeaker = document.getElementById('loudspeaker').value;
    const wireheadphone = document.getElementById('wireheadphone').value;
    const batterytype = document.getElementById('batterytype').value;
    const storage = document.getElementById('storage').value;
    const expandablememory = document.getElementById('expandablememory').value;
    const cardslot = document.getElementById('cardslot').value;
    const simslot = document.getElementById('simslot').value;
    const simsize = document.getElementById('simsize').value;
    const networksupport = document.getElementById('networksupport').value;
    const volte = document.getElementById('volte').value;
    const wifi = document.getElementById('wifi').value;
    const bluetooth = document.getElementById('bluetooth').value;
    const GPS = document.getElementById('GPS').value;
    const NFC = document.getElementById('NFC').value;
    const USB = document.getElementById('USB').value;
    const Positioning = document.getElementById("Positioning").value;
    const Protection = document.getElementById("Protection").value;
    const sensors = document.getElementById('sensors').value;
    const performance = document.getElementById('performance').value;
    const displayperformance = document.getElementById('displayperformance').value;
    const loudspeakerperformance = document.getElementById('loudspeakerperformance').value;
    const batteryperformance = document.getElementById('batteryperformance').value;
    const price = document.getElementById('price').value;
    const id = document.getElementById('id').value;






    const data = {
        "brand": brand,
        "name": name,
        "status": status,
        "amazonLink": amazonLink,
        "launchDate": launchDate,
        "imageSrc": imageSrc,
        "photoCount": photoCount,
        "processor": processor,
        "CPU": CPU,
        "Architecture": Architecture,
        "Graphics": Graphics,
        "ram": ram,
        "OS": OS,
        "display": display,
        "displaytype": displaytype,
        "Resolution": Resolution,
        "Protection":Protection,
        "PixelDensity": pixeldencity,
        "rearCamera": rearcamera,
        "rearCameraFeatures": rearcamerafeatures,
        "rearCameraVideo": rearcameravideo,
        "frontCamera": frontcamera,
        "FrontCameraVideo": frontcameravideo,
        "FrontCameraFeatures": frontcamerafeatures,
        "battery": battery,
        "charging": charging,
        "width": width,
        "height": height,
        "weight": weight,
        "Colours": color,
        "build": build,
        "Loudspeaker": loudspeaker,
        "WireHeadphoneJack": wireheadphone,
        "batterytype": batterytype,
        "storage": storage,
        "ExpandableMemory": expandablememory,
        "CardSlot": cardslot,
        "SIMslot": simslot,
        "SIMsize": simsize,
        "NetworkSupport": networksupport,
        "VOLTE": volte,
        "wifi": wifi,
        "Bluetooth": bluetooth,
        "GPS": GPS,
        "NFC": NFC,
        "USB": USB,
        "Positioning":Positioning,
        "sensors": sensors,
        "Performance": performance,
        "displayPerformance": displayperformance,
        "LoudspeakerPerformance": loudspeakerperformance,
        "BatteryPerformance": batteryperformance,
        "price": price,
        "id": id
      };
  
    const jsonData = JSON.stringify(data, null, 2);
    document.getElementById('jsonOutput').innerText = jsonData;
    document.getElementById('copyButton').style.display = 'block';
  }
  
  function copyJson() {
    const jsonOutput = document.getElementById('jsonOutput');
    const range = document.createRange();
    range.selectNode(jsonOutput);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }
  
