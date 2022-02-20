#!/bin/bash

echo "What's your name ✨?"
read USER_NAME

echo "Describe yourself 😃?"
read DESCRIPTION

echo "We are asking some questions to style your avatar"
echo "What type of shadow should we use 🎨?"
read SHADOW_TYPE

if [[ "$SHADOW_TYPE" = "" ]]; then
    echo "Property is empty, switching to default value: soft shadow\n"
    SHADOW_TYPE=3
elif [[ "$SHADOW_TYPE" = "soft-shadow" ]]; then
    echo "You have chosen the property soft-shadow\n"
    SHADOW_TYPE=3
elif [[ "$SHADOW_TYPE" = "green-gradient" ]]; then
    echo "You have chosen the property green gradient\n"
    SHADOW_TYPE=2
elif [[ "$SHADOW_TYPE" = "violet-gradient" ]]; then
    echo "You have chosen the property violet gradient\n"
    SHADOW_TYPE=1
elif [[ "$SHADOW_TYPE" = "reflection" ]]; then
    echo "You have chosen the property reflection\n"
    SHADOW_TYPE=0
else
    SHADOW_TYPE=3
fi

echo "Would you like the shadow to be animated 🎉? [y/n]"
read ANIMATE_SHADOW

if [[ $ANIMATE_SHADOW = "y" ]]; then
    ANIMATE_SHADOW="true"
elif [[ $ANIMATE_SHADOW = "n" ]]; then
    ANIMATE_SHADOW="false"
else
    ANIMATE_SHADOW="true"
fi

echo "Paypal Username 💸:"
read PAYPAL_USERNAME

CONFIG_FILE_DATA="{\n\t\"avatarOptions\": {\n\t\t\"title\": \"$USER_NAME\",\n\t\t\"description\": \"$DESCRIPTION\"},\n\t\"stylingOptions\": {\n\t\t\"shadowType\": $SHADOW_TYPE,\n\t\t\"isShadowAnimated\": $ANIMATE_SHADOW\n\t},\n\t\"links\": [{\n\t\t\"payPalConfig\": {\n\t\t\t\"payPalUserName\": \"$PAYPAL_USERNAME\",\n\t\t\t\"text\": \"Fund me 💸\"\n\t\t}\n\t}]\n}"

rm -rf ./src/data/config.json
echo $CONFIG_FILE_DATA > ./src/data/config.json

echo "Info: You can add your links inside the src/data/config.json file\n"
echo "Info: every link expects a linkUrl, placeholder and the colorset\n"
echo "Info: You can set your avatar by moving your file into /src/assets/png/avatar.png\n"
echo "Info: You can read more about configuring your links in the documentation👇:\nhttps://github.com/haneeenmahd/linked#configuring"