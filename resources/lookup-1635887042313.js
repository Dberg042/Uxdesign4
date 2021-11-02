(function(window, undefined) {
  var dictionary = {
    "c9f2367a-ffbc-4042-906c-d379f3d3452d": "profil 6",
    "b83d3724-7b89-4b78-be91-00d4f648ae9a": "Varsler",
    "f62304b3-ad92-4958-befe-ac2202be9263": "profil 3 eng",
    "dd3bfa4b-57c6-424d-8770-eed765fac155": "Profil 3",
    "1502b85c-8cf5-4ddd-a305-58b782a5d9b5": "Profil 2",
    "1226240d-bdef-489e-b0b9-3c1f8d701001": "Grilling på bystranda",
    "89de5cdf-92b1-41c9-b055-c5b3b61c954b": "grupper",
    "0657596e-a031-44d4-ba9d-2fdb9fabeb75": "rediger profil eng",
    "a4b7cf8d-2951-4ba1-8b6e-0fb13509eda5": "screen 3",
    "bd9cb8de-5121-40ad-926b-3eb11f88b557": "varsler eng",
    "181dcb35-5c94-49a3-9b65-a82e27ebf36a": "tore hoster fest eng",
    "d705607b-7db0-43d9-9486-70e3e5ea3bec": "oversikt edit eng",
    "6c9e8225-42a9-4f1b-9aa2-19c8b433f8b4": "back in time kro",
    "3dd1f96b-ef1a-4368-ae64-00155b54c447": "profil 6 eng",
    "a4c946da-4e3a-44b0-803f-8750ac8da30b": "Help",
    "3ff896be-772e-43b5-bbab-b04cf2addb99": "min gruppe eng",
    "c0ca084c-085f-4b0b-830c-3c7ff681597f": "FAQ",
    "590320da-ffea-4016-8c50-da6a03c85c14": "profil 5",
    "3825c6af-ccc0-4826-bc7d-07bc4a4140de": "grilling eng",
    "8ccd302c-da40-43df-844b-6a7c9def82c9": "vors hos eivind",
    "61271439-5ab2-4215-b9d8-d27e23b44849": "sang bingo eng",
    "01abddc8-3d55-49f0-a683-66122c4c8089": "profil 4 eng",
    "ecd14505-ce82-4c29-8d74-4e6844bdb480": "FAQeng",
    "136d797f-88fb-4f15-aa6b-2fe57ac61c51": "uia rebus eng",
    "b299aa41-dcd6-44ec-a538-d7c94bdcc8a5": "profil 2 eng",
    "0937cc67-d2ff-453e-9b54-9311202e0537": "vors hos eivind eng",
    "a223f6e7-df59-4ad1-a0e0-9db60f00d64f": "disco eng",
    "d29aea19-739c-41af-b331-060507dffb7a": "Chat Insitilinger",
    "e57c0966-8107-4363-bb5e-75bdc0f65fe9": "silent disco",
    "f20f595a-3642-4b8b-bbdb-a2011aa898b4": "create event eng",
    "2bcb5b9b-d103-42f9-bd78-234d3111d9eb": "Oversikt Edit",
    "8e4c66f4-3b95-48dc-8ffb-bbf2548dbaad": "Gruppe chat",
    "10469a4a-730d-470b-9124-9cda05cba41f": "chat settings",
    "c21614ac-3e57-4c89-a677-6a867cad4e94": "UIA rebus",
    "d5868971-0068-4f0b-acef-5317d89ab680": "oversikt eng",
    "2750d685-eba6-48d2-8c1b-089a0cc6b28c": "screen 2",
    "63dcf33e-99d9-4003-abb1-911aa9599857": "admin eng",
    "6ddb7e29-df09-47f5-955f-8d3504b980c6": "Admin",
    "c07e45f1-c616-467e-8c4b-d672f4b53857": "tore hoste fest",
    "faa02baf-f3e4-46d5-9496-eb635f095119": "HelpEng",
    "ec4b1a6b-12d3-48e6-9d30-73ed8a8e4190": "gruppe chat eng",
    "396162fd-c3c5-4366-ae74-cc26b35b1b88": "settings eng",
    "509da070-3821-48a2-b6c1-c29ef9ed3119": "min gruppe",
    "81644ec7-1a59-443d-92d5-5a06c32025ec": "Oversikt",
    "373ba7c4-cdec-4418-a6cc-201048f85921": "grupper eng",
    "db3def98-630c-4bfd-9574-c64658ffe185": "back in time eng",
    "17e8db02-7f71-4cfb-b0bf-f13e2f389bd0": "profil 1 eng",
    "c180c476-b16e-467c-9e1b-5ec09dc2239d": "Profil 1",
    "9cab665b-6c8e-42e4-b4af-83023e034c2e": "sang bingo på heidis",
    "050654f4-76cd-43e0-87c5-6f3d695971e1": "Lage arrengement",
    "ae485eea-d151-4bb8-8300-a5cf09dca40e": "profil 5 eng",
    "d8176710-9c82-4bde-b2dc-14eac41c85bf": "settings",
    "8e92c3f2-10b6-491a-8c0b-f81f25ea2d77": "profil 4",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "e491d919-1c6b-4d26-9143-70fb89d2207e": "Rediger Bilde",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);