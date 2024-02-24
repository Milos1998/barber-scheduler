import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../App';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { messages } from '../constants/Messages';
import ButtonC from '../components/customElements/ButtonC';
import { commonStyling } from '../constants/Styles';

export type BanProps = {};
type Props = NativeStackScreenProps<RootStackParams, "Ban">;

function Ban(props: Props) {
    return (
        <View style={commonStyling.screen}>
            <ScrollView style={styles.scroll}>
                <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nobis corrupti animi officia veritatis asperiores, quo saepe reiciendis laboriosam, repellendus quos magni ea aperiam perferendis vero. Sequi, veniam autem! Sed totam animi debitis, odio suscipit magni quam nihil, quas modi nesciunt quaerat quo saepe unde beatae sint aliquam soluta amet. Quam eos similique recusandae quod culpa repellat deleniti perspiciatis maxime explicabo, cumque laudantium possimus quo repudiandae veritatis atque. Minima aspernatur placeat iusto quaerat repudiandae. Quas, corporis esse magni nam quisquam ea incidunt placeat et hic accusamus nihil ipsa ut reprehenderit necessitatibus dolore at soluta fugiat nemo velit atque vitae? Optio unde eius deserunt quos, nesciunt quasi ducimus eligendi sapiente molestiae, iste libero quis dolorem iusto voluptas? Consequuntur suscipit, inventore perferendis ratione neque dolorum explicabo ducimus sint eius voluptates quo, tempore alias. Eum perspiciatis amet blanditiis nam beatae ut. Possimus ex cum quos nisi quibusdam perferendis labore ea officia, sapiente dolore iure asperiores, atque culpa molestiae perspiciatis, expedita totam numquam hic repellendus excepturi quam. Nisi voluptate sequi praesentium atque excepturi dolorum expedita! Veniam eligendi ex tenetur, ducimus cupiditate distinctio, molestias consectetur provident nemo libero dignissimos, dolore voluptatibus nulla officiis placeat! Fugiat distinctio tenetur ratione dignissimos porro accusantium tempora, quaerat aut excepturi ea dolores quidem nihil ipsum. Ipsa placeat accusamus ea dolorum! Molestiae repudiandae recusandae ullam cumque obcaecati aut dolor quibusdam itaque eius quam minima ipsam, error doloribus vitae impedit? Magnam accusantium sapiente nostrum soluta necessitatibus ad temporibus pariatur corporis sit provident dignissimos consectetur voluptas iste amet rerum animi, deleniti quaerat ipsum quia a reprehenderit quos est! Repudiandae asperiores ex nulla totam a. Id dolores natus cum, dolorum iusto saepe odio maxime ducimus et error, quaerat illo. Itaque impedit iste enim facere perferendis iusto a facilis eveniet. Maxime, dolorem! Accusantium voluptates nam at quam fuga maiores enim modi quidem odit, similique maxime beatae autem nemo nihil. Error distinctio voluptatum aliquam exercitationem. Expedita, porro. Itaque ab repudiandae quas magnam in deserunt ut atque eius iste quo impedit eligendi minus ea, minima, ducimus odit?</Text>
            </ScrollView>

            <View style={commonStyling.footer}>
                <ButtonC label={messages.info} styles={[commonStyling.infoButton]}/>
            </View>
        </View>
    );
}

export default Ban;

const styles = StyleSheet.create({
    scroll: {
        margin: 20,
    },
    text: {
        fontSize: 20,
    }
});
