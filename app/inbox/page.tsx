import { InboxDisplayFilter } from '@/components/inbox-filter';
import { Button } from '@/components/ui/button';
import { Clock, Trash } from 'lucide-react';


const InboxPage = () => {
  return (
    <section className="w-full h-full min-h-full flex flex-1 overflow-hidden relative">
      {/* Left slot */}
      <div className="flex flex-col flex-1 w-[30%] h-full justify-start items-start gap-4 bg-gray-100 overflow-hidden">
        <nav className="flex sticky p-4 top-0 z-5 bg-white border-b border-gray-300 w-full border-r justify-between items-center">
          <h2 className="font-semibold">Inbox</h2>
          <InboxDisplayFilter />
        </nav>
        <div className="flex p-4">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
            rem iusto, tempore quisquam maxime dolores exercitationem ullam
            architecto nihil reiciendis blanditiis vitae eos sapiente obcaecati
            totam, dolorum repellat praesentium doloribus. Facere ipsa
            distinctio magnam doloremque iure porro tempore numquam mollitia,
            iste dolore et quasi nobis dolores? Ipsa ipsam earum sit nisi
            aspernatur quam in blanditiis quos? Expedita, totam saepe nostrum
            tempore delectus quam ad, suscipit quisquam veniam at possimus ea
            alias doloribus tenetur libero voluptatibus velit animi
            necessitatibus dicta incidunt quibusdam eum facilis? Non esse itaque
            ipsa pariatur rem excepturi! Quos incidunt adipisci repellat
            explicabo laborum officia sunt corrupti eos.
          </p>
        </div>
      </div>
      {/* right slot */}
      <div className="flex w-[70%] flex-col h-full justify-start items-start gap-4 bg-gray-50 overflow-hidden">
        <nav className="flex sticky justify-end items-center p-4 gap-4 top-0 z-10 --mt-4 bg-white border-b border-gray-300 w-full">
          <Button variant="outline">
            <Trash />
            Delete Notification
          </Button>
          <Button variant="outline">
            <Clock />
            Snooze
          </Button>
        </nav>
        <div className="flex p-4">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
            rem iusto, tempore quisquam maxime dolores exercitationem ullam
            architecto nihil reiciendis blanditiis vitae eos sapiente obcaecati
            totam, dolorum repellat praesentium doloribus. Facere ipsa
            distinctio magnam doloremque iure porro tempore numquam mollitia,
            iste dolore et quasi nobis dolores? Ipsa ipsam earum sit nisi
            aspernatur quam in blanditiis quos? Expedita, totam saepe nostrum
            tempore delectus quam ad, suscipit quisquam veniam at possimus ea
            alias doloribus tenetur libero voluptatibus velit animi
            necessitatibus dicta incidunt quibusdam eum facilis? Non esse itaque
            ipsa pariatur rem excepturi! Quos incidunt adipisci repellat
            explicabo laborum officia sunt corrupti eos.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores id ullam sequi reiciendis et in nulla ducimus laborum quo, aliquam maxime quod. Eveniet sapiente perferendis, cumque exercitationem doloremque quas eos iure nostrum aperiam numquam. Vitae, amet atque doloremque quod sapiente nobis sed ex eum eligendi optio in reprehenderit sit officiis provident totam saepe! Ipsam consectetur nesciunt ad a dolorum nobis fugit, sed non eaque repellat facere aliquid veritatis, aliquam amet odio recusandae repellendus repudiandae similique minus beatae nostrum. Est recusandae rerum veniam et. Blanditiis alias, maiores, nesciunt animi dolore eius sunt unde cupiditate in praesentium numquam at sequi aut soluta culpa. Blanditiis a alias labore aliquid dolorem, velit soluta aliquam commodi quo ut placeat adipisci nobis doloremque consequuntur! Ad cumque recusandae, doloremque ex doloribus a, rerum soluta, vel corrupti omnis quasi quis quisquam dolor error dolorum. Cupiditate ut ullam itaque laudantium dicta sed, voluptates, porro rem amet doloremque assumenda error? Numquam impedit doloremque voluptates. Quia excepturi sed, tempore blanditiis aliquid natus rem facere asperiores alias harum ut odit dolorem ad accusamus magnam recusandae, dolores sequi, quisquam vitae porro quaerat autem illo eveniet? Magni nemo illo non excepturi aliquam aliquid quam temporibus voluptate vel impedit eligendi quae maxime pariatur animi, tenetur architecto iusto dolores id doloremque fugiat tempora et quas aut. Tenetur consequatur dolore consectetur ab. Doloremque nemo aut esse architecto suscipit distinctio tempora non quibusdam. Itaque sit dolorum, modi magnam voluptatibus cupiditate, eos harum commodi eligendi quasi odio molestias architecto quaerat hic ut quidem exercitationem incidunt ex pariatur vitae necessitatibus. Voluptate ipsa, reprehenderit modi esse dolorum cupiditate, ratione accusantium laborum maxime qui adipisci magnam deleniti! Placeat enim magnam cupiditate praesentium veniam. Assumenda id soluta quod, amet quasi magnam nostrum, alias doloremque vel eligendi expedita in pariatur suscipit mollitia reiciendis sapiente ipsa quo fugit corrupti? Explicabo tempora eligendi rerum magni soluta laboriosam culpa, error aliquam reprehenderit. Veritatis numquam id tempore ipsam aperiam similique dolorum. Dicta provident sit, debitis molestias ea, rem sed in nostrum temporibus quod velit aliquam animi est corporis eveniet, quidem nihil commodi distinctio alias. Velit dignissimos blanditiis error ex quaerat accusamus repellendus reprehenderit iure soluta cupiditate consectetur, vitae facilis rerum, ratione ab molestias culpa eum id. Eveniet quidem quo explicabo numquam molestiae ipsum voluptate eius consectetur rerum excepturi, ad, quae deleniti! Impedit deserunt aut consectetur vitae nemo ab provident. Minus dolorem odit accusamus suscipit nostrum necessitatibus, ex reprehenderit similique rerum iste dolores, numquam ducimus sed tenetur officiis recusandae mollitia cumque! Est deleniti qui dolor alias doloremque eveniet tempora aliquam eos assumenda reprehenderit eaque repellendus sunt, voluptatem quos? Debitis illum sint, vero unde alias soluta quibusdam repellendus fugit officia. Assumenda id voluptatem laudantium ipsa. Fugiat odit iste exercitationem iure esse reprehenderit voluptates minima deserunt cum fuga. Fugit magnam, odit dolor hic temporibus veniam nesciunt asperiores excepturi nemo, nihil perspiciatis, sint qui debitis aliquam voluptate ea modi fugiat quam. Amet earum error, officia dolore tempore facilis beatae, quaerat vero repellat delectus optio. Quo, aperiam. Necessitatibus, eaque delectus! Vel porro accusamus magni, repellat sed quo corrupti totam deserunt ut, ea aperiam ab iure amet adipisci placeat illo. Sit numquam sapiente sed quam, placeat fugit vitae mollitia obcaecati aperiam id rerum similique consequatur dolor fuga ullam ex. Impedit dolor eius ratione exercitationem aspernatur mollitia doloribus provident ad explicabo voluptas iste vero commodi repellat adipisci obcaecati nostrum error necessitatibus esse omnis, nihil qui harum? Quos ab voluptatibus impedit corrupti, tempora est modi dolore possimus vitae aliquam velit dolorum nisi quas deleniti sed necessitatibus illum. Molestias consequuntur consectetur eveniet illo assumenda, culpa nulla fugiat non corrupti saepe nostrum a iure! Expedita quidem cumque, eaque beatae cupiditate esse sequi natus accusantium rerum quam tenetur modi quae deserunt, architecto pariatur ab debitis quaerat eum aliquam in dignissimos recusandae maiores. Asperiores vitae modi saepe voluptas repellat corrupti recusandae quidem impedit dolore adipisci delectus libero quod, ipsum praesentium consectetur harum magnam facere expedita quia nobis porro quaerat tenetur, vel inventore! Minima, placeat. Commodi pariatur error veritatis, corrupti alias dolorem in odit atque a fugit est omnis, adipisci ea placeat deserunt quia consequuntur vitae rerum ad voluptate officia laudantium aperiam rem at! Corporis dicta perferendis eaque omnis? Eaque, laborum. Maiores facilis, perferendis facere omnis tempore molestias ad dicta eveniet necessitatibus error quos iste assumenda magnam tenetur consequatur est. Voluptatum debitis sit quis corrupti sed quaerat, corporis consequuntur eum quas magni soluta itaque, quibusdam quidem esse ea amet inventore, facere nobis ut! Ipsum quibusdam tempore reiciendis in perspiciatis fugit, at quia cum placeat maxime, natus sed. Molestias quisquam accusantium non nam hic vel, corporis, unde excepturi consequatur pariatur, doloribus saepe cupiditate tempore animi perferendis at nihil praesentium? Quasi quia officiis natus voluptas modi, cumque aspernatur ipsum, veniam ex accusamus excepturi impedit ab! Ducimus error mollitia nemo blanditiis harum enim nihil, quis consectetur unde illo aspernatur in accusamus tenetur consequatur doloremque quidem dolor reprehenderit! Quia, animi odio possimus voluptatum fuga accusamus aspernatur consequatur amet repellat voluptas maiores laudantium consectetur, iusto nam itaque magni fugiat nulla asperiores culpa sapiente a illo. Adipisci dolore atque consequatur similique nostrum non blanditiis, cumque deleniti voluptas error esse animi sint ducimus sequi cum itaque veritatis et. Beatae, odit neque quidem consequatur soluta earum illum molestiae recusandae maxime nam labore consectetur ad officia nesciunt laudantium sed. Necessitatibus consequatur magnam odio temporibus perspiciatis voluptatum quisquam vero harum perferendis quae! Hic non delectus sequi quibusdam nostrum unde cumque laboriosam repellat fugit quam, fugiat omnis corrupti odit provident doloribus sit placeat velit perferendis. Eaque, rem quibusdam aliquid pariatur sapiente magni nisi neque iste fuga, deserunt quisquam id molestias nobis impedit omnis velit molestiae eos vel unde eum et quia dignissimos. Nostrum quae quidem est odio velit eligendi eveniet maiores veritatis totam qui aperiam temporibus nihil a quod officia itaque numquam suscipit soluta et quos architecto, sit unde! Nemo veniam ducimus eaque, odio vel odit numquam labore debitis suscipit corporis sit nesciunt maiores minus, dolore iusto cum temporibus praesentium quisquam dicta, tempora quis? Incidunt exercitationem nobis, dignissimos quam quos quisquam cumque placeat minima laboriosam consequuntur quia laborum veritatis, illum tempore deleniti eligendi sequi odio sunt ea atque nihil porro quaerat. Id.</p>
        </div>
      </div>
    </section>
  );
};

export default InboxPage;
